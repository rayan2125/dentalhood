import React from "react";

const Dealers = () => {
  const advertisements = [
    {
      id: 1,
      title: "Dental Chair - Model X200",
      description: "High-quality dental chair with adjustable features.",
      price: "$1,200",
      contact: "Contact: +1 234 567 8901",
    },
    {
      id: 2,
      title: "Dental Implants - Pack of 10",
      description: "Premium-grade dental implants for professionals.",
      price: "$300",
      contact: "Contact: +1 987 654 3210",
    },
    {
      id: 3,
      title: "Ultrasonic Scaler",
      description: "Compact and powerful scaler for dental cleaning.",
      price: "$800",
      contact: "Contact: +1 456 789 1234",
    },
    {
      id: 3,
      title: "Ultrasonic Scaler",
      description: "Compact and powerful scaler for dental cleaning.",
      price: "$800",
      contact: "Contact: +1 456 789 1234",
    },
    {
      id: 3,
      title: "Ultrasonic Scaler",
      description: "Compact and powerful scaler for dental cleaning.",
      price: "$800",
      contact: "Contact: +1 456 789 1234",
    },
    {
      id: 3,
      title: "Ultrasonic Scaler",
      description: "Compact and powerful scaler for dental cleaning.",
      price: "$800",
      contact: "Contact: +1 456 789 1234",
    },
    {
      id: 3,
      title: "Ultrasonic Scaler",
      description: "Compact and powerful scaler for dental cleaning.",
      price: "$800",
      contact: "Contact: +1 456 789 1234",
    },
    {
      id: 3,
      title: "Ultrasonic Scaler",
      description: "Compact and powerful scaler for dental cleaning.",
      price: "$800",
      contact: "Contact: +1 456 789 1234",
    },
  ];

  return (
    <section style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Dental Dealers Section
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {advertisements.map((ad) => (
          <div
            key={ad.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "300px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>{ad.title}</h3>
            <p style={{ margin: "0 0 5px 0" }}>{ad.description}</p>
            <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>
              Price: {ad.price}
            </p>
            <p style={{ margin: "0 0 5px 0" }}>{ad.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dealers;
