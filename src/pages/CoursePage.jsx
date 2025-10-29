import { useParams } from "react-router-dom";

export default function CoursePage() {
  const { id } = useParams(); // récupère l’ID dans l’URL

  return (
    <div className="container mt-5">
      <h2>🏌️‍♀️ Détails du parcours {id}</h2>
      <p>Informations détaillées sur le parcours sélectionné.</p>
    </div>
  );
}
