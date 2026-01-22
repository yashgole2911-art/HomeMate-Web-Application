"use client";

import { useRouter, useParams } from "next/navigation";

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#eef2f5",
    display: "flex",
    justifyContent: "center",
    padding: "12px",
  },

  container: {
    width: "100%",
    maxWidth: "360px",
    background: "#fff",
    borderRadius: "20px",
    padding: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: "20px",
  },

  backBtn: {
    position: "absolute",
    left: 0,
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "none",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    cursor: "pointer",
    fontSize: "18px",
  },

  title: {
    fontWeight: 600,
    fontSize: "16px",
  },

  profile: {
    textAlign: "center" as const,
    marginBottom: "24px",
  },

 avatar: {
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  objectFit: "cover" as const,
  margin: "0 auto 10px auto",
  display: "block",
},

  name: {
    fontSize: "18px",
    fontWeight: 600,
  },

  added: {
    fontSize: "13px",
    color: "#777",
    marginBottom: "12px",
  },

  attendanceBtn: {
    padding: "12px",
    width: "100%",
    maxWidth: "240px",
    background: "#1fa9b8",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "14px",
    cursor: "pointer",
  },

  sectionTitle: {
    fontWeight: 600,
    marginTop: "20px",
    marginBottom: "10px",
  },

  row: {
    marginBottom: "12px",
  },

  label: {
    fontSize: "12px",
    color: "#777",
  },

  value: {
    fontSize: "14px",
    fontWeight: 500,
  },
};

export default function HelperProfilePage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <button onClick={() => router.back()} style={styles.backBtn}>
            ←
          </button>
          <div style={styles.title}>home/mate</div>
        </div>

        {/* Profile */}
        <div style={styles.profile}>
          <img
            src="/avatars/avatar.jpg"
            alt="avatar"
            style={styles.avatar}
          />

          <div style={styles.name}>Sheetal Pandey</div>
          <div style={styles.added}>Added on 25th August 2023</div>

          <button
            style={styles.attendanceBtn}
           onClick={() => router.push(`/attendance/${id}`)}
          >
            View attendance log
          </button>
        </div>

        {/* Personal details */}
        <div>
          <div style={styles.sectionTitle}>Personal details</div>

          <div style={styles.row}>
            <div style={styles.label}>Name</div>
            <div style={styles.value}>Sheetal Pandey</div>
          </div>

          <div style={styles.row}>
            <div style={styles.label}>Location</div>
            <div style={styles.value}>Dadar West</div>
          </div>

          <div style={styles.row}>
            <div style={styles.label}>Mobile no</div>
            <div style={styles.value}>9876543210</div>
          </div>

          <div style={styles.row}>
            <div style={styles.label}>DOB</div>
            <div style={styles.value}>12/08/1992</div>
          </div>

          <div style={styles.sectionTitle}>Work details</div>

          <div style={styles.row}>
            <div style={styles.label}>Category</div>
            <div style={styles.value}>Maid - Cleaner</div>
          </div>

          <div style={styles.row}>
            <div style={styles.label}>Pay Cycle</div>
            <div style={styles.value}>Monthly</div>
          </div>

          <div style={styles.row}>
            <div style={styles.label}>Pay</div>
            <div style={styles.value}>Rs.5000/month</div>
          </div>

          <div style={styles.row}>
            <div style={styles.label}>Paid Leaves</div>
            <div style={styles.value}>02</div>
          </div>

          <div style={styles.row}>
            <div style={styles.label}>Visiting time</div>
            <div style={styles.value}>08:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
}