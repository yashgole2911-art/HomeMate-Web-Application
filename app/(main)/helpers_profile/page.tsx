"use client";

import { useRouter } from "next/navigation";

const helpers = [
  {
    id: "1",
    name: "Sheetal",
    role: "Maid - Cleaner",
    area: "Dadar West",
    image: "/avatars/avatar.jpg",
  },
  {
    id: "2",
    name: "Poonam",
    role: "Cook",
    area: "Dadar East",
    image: "/avatars/avatar.jpg",
  },
  {
    id: "3",
    name: "Dinesh",
    role: "Driver",
    area: "Parel",
    image: "/avatars/avatar.jpg",
  },
  {
    id: "4",
    name: "Ramprasad",
    role: "Milkman",
    area: "Dadar West",
    image: "/avatars/avatar.jpg",
  },
  {
    id: "5",
    name: "Sarita",
    role: "Newspaper",
    area: "Dadar West",
    image: "/avatars/avatar.jpg",
  },
  {
    id: "6",
    name: "Mohan",
    role: "Professional Laundry",
    area: "Dadar West",
    image: "/avatars/avatar.jpg",
  },
];

export default function HelpersProfilesPage() {
  const router = useRouter();

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h3 style={styles.title}>home/mate</h3>

        {/* Search */}
        <div style={styles.searchRow}>
          <div style={styles.searchBox}>
            <input placeholder="Search" style={styles.input} />
          </div>
          <div style={styles.filter}>≡</div>
        </div>

        {/* List */}
        <div style={styles.list}>
          {helpers.map((h) => (
            <div
              key={h.id}
              style={styles.card}
              onClick={() => {
                if (h.name === "Sheetal") router.push("/sheetal_pandey");
                else if (h.name === "Poonam") router.push("/Poonam");
                else if (h.name === "Dinesh") router.push("/Dinesh");
                // Add other users if needed
              }}
            >
              <img src={h.image} style={styles.avatar} />
              <div style={styles.info}>
                <div style={styles.name}>{h.name}</div>
                <div style={styles.sub}>
                  {h.role}, {h.area}
                </div>
              </div>
              <div style={styles.arrow}>›</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: any = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  title: {
    textAlign: "center",
    marginBottom: "12px",
  },
  searchRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "16px",
  },
  searchBox: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: "6px",
    borderRadius: "12px",
    padding: "10px 12px",
    border: "1px solid #ddd",
  },
  input: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "14px",
    background: "transparent",
  },
  filter: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    cursor: "pointer",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    paddingBottom: "80px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    padding: "12px",
    borderRadius: "14px",
    cursor: "pointer",
  },
  avatar: {
    width: "44px",
    height: "44px",
    marginRight: "12px",
    borderRadius: "50%",
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 600,
    fontSize: "15px",
  },
  sub: {
    fontSize: "13px",
    color: "#666",
  },
  arrow: {
    fontSize: "22px",
    color: "#888",
  },
};