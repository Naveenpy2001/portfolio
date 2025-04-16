import '../css/Text.css'
const SectionBox = ({ title, description, borderColor }) => {
  return (
    <div
      className="header-section"
      style={{
        backgroundColor: "white",
        padding: "0",
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 className="section-title appeared" style={{ color: "#000", textTransform: "uppercase", letterSpacing: "2px", position: "relative", display: "inline-block" }}>
        {title}
        <span style={{ content: "''", position: "absolute", width: "60%", height: "3px", background: borderColor, bottom: "-10px", left: "50%", transform: "translateX(-50%)" }}></span>
      </h2>
      <p className="section-caption appeared" style={{color: "#555",fontStyle:'italic' }}>{description}</p>
    </div>
  );
};

export default SectionBox;
