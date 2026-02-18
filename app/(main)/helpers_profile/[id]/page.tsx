"use client";

import { useParams, useRouter } from "next/navigation";

const helpers: any = {
  "1": {
    name: "Sheetal",
    role: "Maid - Cleaner",
    area: "Dadar West",
    phone: "9876543210",
    image: "/avatars/avatar.jpg",
  },
  "2": {
    name: "Poonam",
    role: "Cook",
    area: "Dadar East",
    phone: "9876543211",
    image: "/avatars/avatar.jpg",
  },
  "3": {
    name: "Dinesh",
    role: "Driver",
    area: "Parel",
    phone: "9876543212",
    image: "/avatars/avatar.jpg",
  },
};

export default function HelperDetailPage() {
  const params = useParams();
  const router = useRouter();

  const helper = helpers[params.id as string];

  if (!helper) {
    return <p style={{ textAlign: "center" }}>Helper not found</p>;
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.appTitle}>home/mate</h3>

      <div style={styles.card}>
        <img src={helper.image} style={styles.avatar} />

        <h3 style={styles.name}>{helper.name}</h3>
        <p style={styles.text}>{helper.role}</p>
        <p style={styles.text}>{helper.area}</p>
        <p style={styles.text}>{helper.phone}</p>

        <button style={styles.btn} onClick={() => router.back()}>
          Go back
        </button>
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    width: "100%",
    maxWidth: 380,
    padding: 16,
    margin: "0 auto",
    textAlign: "center",
  },
  appTitle: {
    fontWeight: 600,
    marginBottom: 16,
  },
  card: {
    background: "#fff",
    padding: 24,
    borderRadius: 16,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 12,
  },
  name: {
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
  btn: {
    marginTop: 20,
    padding: "10px 16px",
    background: "#3bb3c3",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    cursor: "pointer",
  },
};