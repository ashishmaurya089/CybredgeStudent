import React, { useEffect, useRef } from "react";

function Testimonial() {
  const containerRef = useRef(null);

  useEffect(() => {
    let scrollX = 0;
    let animationFrame;
    let isPaused = false;

    const container = containerRef.current;

    const getSpeed = () => {
      const width = window.innerWidth;
      if (width < 576) return 0.3;
      if (width < 992) return 0.5;
      return 0.8;
    };

    let speed = getSpeed();

    const animate = () => {
      if (!isPaused && container) {
        scrollX += speed;
        container.scrollLeft = scrollX;

        // Reset scroll when we reach halfway (since we duplicated the cards)
        if (scrollX >= container.scrollWidth / 2) {
          scrollX = 0;
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      speed = getSpeed();
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    window.addEventListener("resize", handleResize);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const testimonials = [
    {
      img: "https://cybredge-private-limited.netlify.app/assets/img/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      title: "Store Owner",
      text: "Enim nisi quem export duis labore cillum quae magna enim sint.",
    },
    {
      img: "https://cybredge-private-limited.netlify.app/assets/img/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      title: "Freelancer",
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos.",
    },
    {
      img: "https://cybredge-private-limited.netlify.app/assets/img/testimonials/testimonials-5.jpg",
      name: "John Larson",
      title: "Entrepreneur",
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua.",
    },
    {
      img: "https://cybredge-private-limited.netlify.app/assets/img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      title: "CEO & Founder",
      text: "Proin iaculis purus consequat sem cure dignissim donec porttitora.",
    },
    {
      img: "https://cybredge-private-limited.netlify.app/assets/img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      title: "Designer",
      text: "Export tempor illum tamen malis malis eram quae irure esse labore.",
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      style={{
        background: "linear-gradient(#0a1a44,#003f88,#007bff)",
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#fff",
            marginBottom: "15px",
            letterSpacing: "2px",
          }}
        >
          TESTIMONIALS
        </h2>
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#ff6b6b",
            margin: "10px auto 30px",
            borderRadius: "2px",
          }}
        ></div>
        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <b> Headline: </b> Why Clients Trust Us : <br /> <br />
          Because we do not just execute tasks. We collaborate, guide, and
          elevate. We listen deeply, we ask the right questions, we challenge
          assumptions, we refine ideas, we stay involved, we deliver excellence.
          <br /> <br />
          <b> Our Promise to Our Clients:</b> <br /> <br />
          We don’t just want you to be satisfied. We want you to feel proud of
          what represents you. Our clients stay with us because they feel
          supported, understood, and valued. <br /> <br />
          <b> The Results We Deliver:</b> <br /> <br />
          Recognized <br /> <br />
          Respected <br /> <br />
          Remembered <br /> <br />
        </p>
      </div>

      <div
        style={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          ref={containerRef}
          style={{
            display: "flex",
            gap: "30px",
            overflowX: "hidden",
            overflowY: "hidden",
            scrollBehavior: "auto",
            padding: "20px 0",
            width: "100%",
            whiteSpace: "nowrap",
          }}
        >
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
                padding: "30px",
                width: "350px",
                minWidth: "350px",
                maxWidth: "350px",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                flexShrink: 0,
                display: "inline-block",
                whiteSpace: "normal",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0px 8px 25px rgba(0, 0, 0, 0.15)";
              }}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #f1f1f1",
                  marginBottom: "15px",
                }}
              />
              <h3
                style={{
                  marginBottom: "5px",
                  fontSize: "1.3rem",
                  color: "#333",
                  fontWeight: "600",
                }}
              >
                {testimonial.name}
              </h3>
              <h4
                style={{
                  fontSize: "0.9rem",
                  color: "#888",
                  marginBottom: "12px",
                  fontWeight: "400",
                }}
              >
                {testimonial.title}
              </h4>
              <div
                style={{
                  fontSize: "20px",
                  color: "#f1c40f",
                  marginBottom: "12px",
                }}
              >
                ★★★★★
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  fontStyle: "italic",
                  lineHeight: "1.6",
                }}
              >
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
