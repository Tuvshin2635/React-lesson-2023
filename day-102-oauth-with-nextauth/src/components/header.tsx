import { useSession, signIn } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  const handleLogin = (e: any) => {
    e.preventDefault();
    signIn();
  };

  return (
    <header>
      <div>
        <div>
          {!session && (
            <div>
              <span>You are not SIGNED</span>
              <a href={`/api/auth/signin`} onClick={handleLogin}>
                SIGN IN
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
