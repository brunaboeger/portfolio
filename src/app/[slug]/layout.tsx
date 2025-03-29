import { Button } from "@/src/components/ui/button";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="relative">
      <Button className="fixed mt-[60px] top-0 lef-0" variant="outline">Previous project</Button>
      <Button className="fixed m-[60px] top-0 right-0" variant="outline">Next project</Button>
      {children}
    </div>
  );
}
