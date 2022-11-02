import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function Conversation() {
  const params = useParams();
  return (
    <PageHeader pageName={params.slug || "Conversação"}>Ola Mundo</PageHeader>
  );
}
