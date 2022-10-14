import { PageHeaderContainer } from "../styles/General";

interface PageHeaderProps {
  children: React.ReactNode;
}

export default function PageHeader({ children }: PageHeaderProps) {
  return <PageHeaderContainer>{children}</PageHeaderContainer>;
}
