"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ABSENT_DAYS_DEFAULT = [2, 11];
const TODAY = 15;

export default function AttendancePage() {
  const router = useRouter();

  const [absentDays, setAbsentDays] = useState<number[]>(ABSENT_DAYS_DEFAULT);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const isAbsent = (day: number) => absentDays.includes(day);

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };

  const markAbsent = () => {
    if (selectedDay && !isAbsent(selectedDay)) {
      setAbsentDays([...absentDays, selectedDay]);
      setSelectedDay(null);
    }
  };

  const markPresent = () => {
    if (selectedDay && isAbsent(selectedDay)) {
      setAbsentDays(absentDays.filter((d) => d !== selectedDay));
      setSelectedDay(null);
    }
  };

  const cancelSelection = () => {
    setSelectedDay(null);
  };

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={() => router.back()}>
        ←
      </button>

      <h4 style={styles.appTitle}>home/mate</h4>

      <p style={styles.sub}>Attendance log:</p>
      <h3 style={styles.name}>Sheetal Pandey</h3>

      <div style={styles.calendar}>
        <h3 style={styles.month}>July 2024</h3>

        <div style={styles.week}>
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        <div style={styles.days}>
          {[30, ...Array.from({ length: 31 }, (_, i) => i + 1)].map(
            (day, i) => {
              if (i === 0) {
                return (
                  <span key={i} style={{ opacity: 0.3 }}>
                    30
                  </span>
                );
              }

              const selected = selectedDay === day;
              const absent = isAbsent(day);
              const today = day === TODAY;

              return (
                <button
                  key={day}
                  onClick={() => handleDayClick(day)}
                  style={{
                    ...styles.day,
                    background: absent
                      ? "#f08a94"
                      : today
                      ? "#1fb6d5"
                      : "transparent",
                    color: absent || today ? "#fff" : "#333",
                    border: selected
                      ? "2px solid #000"
                      : "1px solid transparent",
                  }}
                >
                  {day}
                </button>
              );
            }
          )}
        </div>
      </div>

      <div style={styles.actions}>
        {selectedDay && !isAbsent(selectedDay) && (
          <button style={styles.primary} onClick={markAbsent}>
            Mark absent
          </button>
        )}

        {selectedDay && isAbsent(selectedDay) && (
          <button style={styles.primary} onClick={markPresent}>
            Mark present
          </button>
        )}

        <button
          style={{
            ...styles.secondary,
            opacity: selectedDay ? 1 : 0.5,
          }}
          disabled={!selectedDay}
          onClick={cancelSelection}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    width: "100%",
    maxWidth: 380,
    padding: 20,
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    left: 16,
    top: 16,
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "none",
    background: "#e2e8f0",
    fontSize: 18,
    cursor: "pointer",
  },
  appTitle: {
    textAlign: "center",
    marginBottom: 16,
  },
  sub: {
    textAlign: "center",
    color: "#666",
    marginBottom: 4,
  },
  name: {
    textAlign: "center",
    marginBottom: 20,
  },
  calendar: {
    borderRadius: 24,
    padding: 20,
  },
  month: {
    textAlign: "center",
    marginBottom: 12,
  },
  week: {
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    textAlign: "center",
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },
  days: {
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    gap: 8,
    textAlign: "center",
  },
  day: {
    width: 38,
    height: 38,
    borderRadius: 10,
    background: "transparent",
    cursor: "pointer",
    fontSize: 14,
  },
  actions: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    marginTop: 24,
  },
  primary: {
    padding: "10px 18px",
    background: "#1fb6d5",
    border: "none",
    borderRadius: 12,
    color: "#fff",
    cursor: "pointer",
  },
  secondary: {
    padding: "10px 18px",
    border: "1px solid #bbb",
    borderRadius: 12,
    background: "transparent",
    cursor: "pointer",
  },
};