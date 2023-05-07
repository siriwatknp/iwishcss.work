import React from "react";

export const PseudoAbsolute = () => {
  return (
    <ul className="container">
      {[...Array(20)].map((_, index) => (
        <li key={index} className="item">
          Item {index + 1}
        </li>
      ))}
      <style jsx>{`
        .container {
          --shadow-channel: 200 200 200;
          display: flex;
          gap: 0.5rem;
          overflow: auto hidden;
          padding: 0;
          margin: 0;
          position: relative;

          &::after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            height: 100%;
            width: 40px;
            background: linear-gradient(
              to left,
              rgba(var(--shadow-channel) / 0.5),
              rgba(var(--shadow-channel) / 0)
            );
          }
        }
        .item {
          padding: 0.5rem 1rem;
          list-style: none;
          white-space: nowrap;
        }
      `}</style>
    </ul>
  );
};

export const PseudoSticky = () => {
  return (
    <ul className="container">
      {[...Array(20)].map((_, index) => (
        <li key={index} className="item">
          Item {index + 1}
        </li>
      ))}
      <style jsx>{`
        .container {
          --shadow-channel: 200 200 200;
          display: flex;
          gap: 0.5rem;
          overflow: auto hidden;
          padding: 0;
          margin: 0;
          position: relative;

          &::after {
            content: "";
            display: block;
            position: sticky;
            right: 0;
            align-self: stretch;
            width: 40px;
            flex: none;
            background: linear-gradient(
              to left,
              rgba(var(--shadow-channel) / 0.5),
              rgba(var(--shadow-channel) / 0)
            );
          }
        }
        .item {
          padding: 0.5rem 1rem;
          list-style: none;
          white-space: nowrap;
        }
      `}</style>
    </ul>
  );
};

export const MaskImage = () => {
  return (
    <ul className="container">
      {[...Array(20)].map((_, index) => (
        <li key={index} className="item">
          Item {index + 1}
        </li>
      ))}
      <style jsx>{`
        .container {
          display: flex;
          gap: 0.5rem;
          overflow: auto hidden;
          padding: 0;
          margin: 0;
          mask-image: linear-gradient(
            to right,
            transparent,
            white 1rem,
            white calc(100% - 1rem),
            transparent
          );
        }
        .item {
          padding: 0.5rem 1rem;
          list-style: none;
          white-space: nowrap;
        }
      `}</style>
    </ul>
  );
};
