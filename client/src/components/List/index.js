import React from "react";
// import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="container">
        <div class="card"> 
        <div class="card-header">
            <h1>{children}</h1>
        </div>
        </div>
    </div>
  );
}

export function ListItem({ children }) {
  return <h1 className="title">{children}</h1>;
}
