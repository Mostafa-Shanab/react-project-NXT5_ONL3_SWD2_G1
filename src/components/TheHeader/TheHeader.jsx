import { useEffect } from "react";
import "./TheHeader.css";

function TheHeader({ headerLinks }) {
  console.log("Hello From TheHeader Child Component Before useEffect");
  useEffect(() => {
    console.log("Hello From TheHeader Child Component From useEffect 1");
    // This function will be fired after component unmount or deleted mean removed from DOM
    return () =>
      console.log(
        "Hello From TheHeader Child Component From useEffect 1 After UnMountttttttttttttttttttttt"
      );
  }, []);

  console.log("Hello From TheHeader Child Component After useEffect");

  return (
    <header>
      <nav>
        <ul>
          {headerLinks.map(({ title, path }) => (
            <li key={path}>
              <a href={path}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default TheHeader;
