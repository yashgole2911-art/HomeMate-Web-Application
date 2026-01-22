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
    return <p>Helper not found</p>;
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>home/mate</h2>

      <div style={styles.card}>
        <img src={helper.image} style={styles.avatar} />

        <h3>{helper.name}</h3>
        <p>{helper.role}</p>
        <p>{helper.area}</p>
        <p>{helper.phone}</p>

        <button style={styles.btn} onClick={() => router.back()}>
          Go Back
        </button>
      </div>
    </div>
  );
}

const styles: any = {
  page: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    marginBottom: "16px",
  },
  card: {
    background: "#fff",
    padding: "24px",
    borderRadius: "16px",
    maxWidth: "360px",
    margin: "0 auto",
  },
  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "12px",
  },
  btn: {
    marginTop: "20px",
    padding: "10px 16px",
    background: "#3bb3c3",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
  },
};