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
    route: "/Poonam",
  },
  {
    name: "Dinesh",
    role: "Driver",
    pay: "₹2500",
    leaves: "00",
    image: "/avatars/avatar.jpg", 
    route: "/Dinesh",
  },
];

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        
        <h3 style={styles.appTitle}>home/mate</h3>

        
        <div style={styles.date}>15th June 2024, Saturday</div>

        <h2 style={styles.heading}>June Dashboard</h2>

        <div style={styles.tabs}>
          <div style={styles.activeTab}>Monthly</div>
          <div style={styles.tab}>Weekly</div>
        </div>

        {/* Search */}
        <input placeholder="Search" style={styles.search} />

        <div style={styles.list}>
          {helpers.map((h, i) => (
            <div
              key={i}
              style={styles.card}
              onClick={() => router.push(h.route)}
            >
            
              <img                          
                src={h.image}
                alt={h.name}
                style={styles.avatar}
              />

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
    </div>
  );
}


{/*style*/}

const styles: any = {
  wrapper: {
    minHeight: "100vh",
    background: "#eef2f5",
    display: "flex",
    justifyContent: "center",
    padding:"12px"
  },
  container: {
    width: "380px",
    background: "#fff",
    padding: "16px",
  },
  appTitle: {
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: 600,
  },
  date: {
    background: "#3b82f6",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "12px",
    display: "inline-block",
    fontSize: "13px",
    marginBottom: "12px",
  },
  heading: {
    marginBottom: "12px",
  },
  tabs: {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "14px",
  },
  tab: {
    flex: 1,
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    color: "#555",
  },
  activeTab: {
    flex: 1,
    padding: "10px",
    textAlign: "center",
    background: "#e0f2fe",
    fontWeight: 600,
  },
  search: {
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    marginBottom: "14px",
  },
  list: {
    maxHeight: "60vh",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  card: {
    display: "flex",
    gap: "12px",
    background: "#eef3f7",
    padding: "12px",
    borderRadius: "16px",
    cursor: "pointer",
    alignItems: "center",
  },
  avatar: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    objectFit: "cover",
    background: "#ddd",
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 600,
    fontSize: "15px",
  },
  role: {
    fontSize: "13px",
    color: "#555",
    marginBottom: "4px",
  },
  meta: {
    fontSize: "12px",
    color: "#777",
  },
  icons: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  icon: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    border: "1px solid #333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
  },
};