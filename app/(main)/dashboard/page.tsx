"use client";

import { useRouter } from "next/navigation";

const helpers = [
  {
    name: "Sheetal",
    role: "Maid - Cleaner",
    pay: "₹1500",
    leaves: "02",
    image: "/avatars/avatar.jpg",
    route: "/sheetal_pandey",
  },
  {
    name: "Poonam",
    role: "Cook",
    pay: "₹1500",
    leaves: "01",
    image: "/avatars/avatar.jpg",
    route: "/poonam",
  },
  {
    name: "Dinesh",
    role: "Driver",
    pay: "₹2500",
    leaves: "00",
    image: "/avatars/avatar.jpg",
    route: "/dinesh",
  },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h3 style={styles.appTitle}>home/mate</h3>

      <div style={styles.date}>15th June 2024, Saturday</div>

      <h2 style={styles.heading}>June Dashboard</h2>

      <div style={styles.tabs}>
        <div style={styles.activeTab}>Monthly</div>
        <div style={styles.tab}>Weekly</div>
      </div>

      <input placeholder="Search" style={styles.search} />

      <div style={styles.list}>
        {helpers.map((h, i) => (
          <div
            key={i}
            style={styles.card}
            onClick={() => router.push(h.route)}
          >
            <img src={h.image} alt={h.name} style={styles.avatar} />

            <div style={styles.info}>
              <div style={styles.name}>{h.name}</div>
              <div style={styles.role}>{h.role}</div>

              <div style={styles.meta}>
                Pay till today: <b>{h.pay}</b>
              </div>
              <div style={styles.meta}>
                Leaves till today: <b>{h.leaves}</b>
              </div>
            </div>

            <div style={styles.icons}>
              <div style={styles.icon}>📞</div>
              <div style={styles.icon}>📅</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    width: "100%",
    maxWidth: 380,
    padding: 16,
  },
  appTitle: {
    textAlign: "center",
    marginBottom: 10,
    fontWeight: 600,
  },
  date: {
    background: "#3b82f6",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 12,
    display: "inline-block",
    fontSize: 13,
    marginBottom: 12,
  },
  heading: {
    marginBottom: 12,
  },
  tabs: {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 14,
  },
  tab: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    cursor: "pointer",
    color: "#555",
  },
  activeTab: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    background: "#e0f2fe",
    fontWeight: 600,
  },
  search: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    border: "1px solid #ccc",
    marginBottom: 14,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  card: {
    display: "flex",
    gap: 12,
    background: "#eef3f7",
    padding: 12,
    borderRadius: 16,
    cursor: "pointer",
    alignItems: "center",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    objectFit: "cover",
    background: "#ddd",
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 600,
    fontSize: 15,
  },
  role: {
    fontSize: 13,
    color: "#555",
    marginBottom: 4,
  },
  meta: {
    fontSize: 12,
    color: "#777",
  },
  icons: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  icon: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    border: "1px solid #333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
  },
};