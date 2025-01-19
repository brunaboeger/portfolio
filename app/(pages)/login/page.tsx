import LoginForm from "@/app/ui/components/login/login-form";
import Entrance from "@/app/ui/components/login/entrance";

export default function Page() {
  const backgroundImage = "url(/images/login.webp)";

  return (
    <div className="container flex sm:column h-100vh">
      <section
        className="flex h-100 md:w-50 bg-image"
        style={{ backgroundImage: backgroundImage }}
      />
      <section className="flex align-center justify-center p-container round-top-3 z-index-20 bg-white -mt-8 md:w-50">
        <Entrance />
        {/* <LoginForm /> */}
      </section>
    </div>
  );
}
