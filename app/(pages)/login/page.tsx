import LoginForm from "@/app/ui/components/login/login-form";

export default function Page() {
  const backgroundImage = "url(/images/login-3.webp)";

  return (
    <div className="flex sm:column h-100vh">
      <section className="flex align-center justify-center p-container h-100 md:w-50">
        <LoginForm />
      </section>
      <section
        className="flex h-100 md:w-50 bg-image"
        style={{ backgroundImage: backgroundImage }}
      ></section>
    </div>
  );
}
