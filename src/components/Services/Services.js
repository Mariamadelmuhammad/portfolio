import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
export default function Services() {
  return (
    <section id="services">
      <h5>What I Do</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
          </ul>
        </article>
        {/* ______________________ */}
        <article className="services">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>lorem ipsum</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
