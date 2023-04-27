import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/header.module.css";

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const handleLogin = (e: any) => {
    e.preventDefault();
    signIn();
  };
  console.log("first", session);

  const handleLogout = (e: any) => {
    e.preventDefault();
    signOut();
  };

  return (
    <header>
      <noscript>
        <style> {`nojs-show {opacity:1; top: 0}`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <div
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.load
          }`}
        >
          {!session && (
            <div>
              <span>You are not SIGNED</span>
              <a href={`/api/auth/signin`} onClick={handleLogin}>
                SIGN IN
              </a>
            </div>
          )}

          {session?.user && (
            <div>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url(${session.user.image})` }}
                  className={styles.avatar}
                />
              )}
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={handleLogout}
              >
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
