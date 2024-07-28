import React from "react";
import { footer } from "../../containts/footer_contact";
import { clsx } from "clsx";
export default function FooterPage() {
  return (
    <>
      <hr className="my-4"></hr>
      <div className="footer mt-2 p-3">
        <div className="col-10 d-flex mx-auto">
          <div className="col-4 px-4">
            <h2 className="title_footer text-2xl fw-bold">
              {footer.title.name}
            </h2>
            <span>
              {footer.title.description}
              <br></br>
              &quot;{footer.title.quote}&quot;
            </span>
          </div>
          <div className="col-3">
            <h2 className="title_branch text-2xl fw-bold">
              {footer.branch.name}
            </h2>
            <div className="branch d-flex flex-column">
              {footer.branch.branch.map((item, index) => {
                return (
                  <a href="#" key={index}>
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <h2 className="title_navigation text-2xl fw-bold">
              {footer.navigation.name}
            </h2>
            <div className="navigation_link d-flex flex-column">
              {footer.navigation.navigation.map((item, index) => {
                return (
                  <a key={index} href="#">
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-2">
            <h2 className="title_interact text-2xl fw-bold">
              {footer.interact.name}
            </h2>
            <div className="inteact_icon d-flex flex-column gap-3 mt-3">
              {footer.interact.icon.map((item, index) => {
                return (
                  <a key={index} href={item.link}>
                    <i class={clsx("mx-2", item.icon)}></i>
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
