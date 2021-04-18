import React from "react";
import classNames from "classnames";

type PaperProps = {
    className: string;
};

const Paper = ({className}: PaperProps) => {
    return (
        <div className="paper__img rpc__img">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="182.558"
                height="224.872"
                viewBox="0 0 182.558 224.872"
            >
                <g transform="translate(-400.582 -552.687)">
                    <path
                        className={classNames("a", className)}
                        d="M488.506,634.786a12.113,12.113,0,0,0-12.1,12.1v57.847a2.679,2.679,0,0,1-5.357,0V618.454a14.2,14.2,0,0,0-14.183-14.183,14.017,14.017,0,0,0-10.236,4.21,14.34,14.34,0,0,0-3.947,10.025v86.225a2.679,2.679,0,0,1-5.357,0V619.577a15.325,15.325,0,0,0-15.309-15.306c-9.581,0-15.306,8.272-15.306,16.27v84.191a2.679,2.679,0,0,1-5.357,0v-68.95A14.2,14.2,0,0,0,387.173,621.6c-8.878,0-14.185,7.671-14.185,15.087V741.32h31.5A43.2,43.2,0,0,1,437.2,756.3a2.678,2.678,0,1,1-4.054,3.5,37.852,37.852,0,0,0-28.661-13.125H370.311a2.687,2.687,0,0,1-.358-.037c-.047-.005-.091-.005-.136-.013a2.657,2.657,0,0,1-.64-.209c-.047-.023-.091-.05-.138-.076a2.691,2.691,0,0,1-.494-.345c-.021-.018-.047-.029-.068-.047L355.2,733.471a25.223,25.223,0,0,0-35.193.488,6.566,6.566,0,0,0-.2,9.137l50.3,54.569c20.177,22.363,40.676,31.479,70.768,31.479,32.942,0,59.743-27.078,59.743-60.362v-121.3C500.607,641.327,496.365,634.786,488.506,634.786Z"
                        transform="translate(82.533 -51.584)"
                    />
                </g>
            </svg>
        </div>
    );
};
export default Paper;