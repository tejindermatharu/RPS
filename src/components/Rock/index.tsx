import React from "react";
import classNames from "classnames";

type RockProps = {
    className: string;
};

const Rock: React.FC<RockProps> = ({className}: RockProps) => {
    return (
        <div className={classNames("rock_img rpc__img", className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="159.37"
                height="172.26"
                viewBox="0 0 159.37 172.26"
            >
                <g transform="translate(-433.03 -426.806)">
                    <g transform="translate(22 -152)">
                        <g transform="translate(411.03 578.806)">
                            <path
                                className="a"
                                d="M282.092,677.977v-35.76a17.8,17.8,0,0,0-35.606,0V676.99h31.4A9.481,9.481,0,0,1,282.092,677.977Z"
                                transform="translate(-161.206 -624.414)"
                            />
                            <path
                                className="a"
                                d="M246.947,676.019V639.9a14.88,14.88,0,1,0-29.76,0v44.513a37.654,37.654,0,0,1,23.722-8.39Z"
                                transform="translate(-208.434 -623.444)"
                            />
                            <path
                                className="a"
                                d="M356.641,678.423a21.913,21.913,0,0,1-18.957-10.965,33.232,33.232,0,0,1-30.792,20.836H284.625a36.581,36.581,0,0,1,17.542,31.22v10.027a2.679,2.679,0,0,1-5.357,0V719.514a31.256,31.256,0,0,0-31.221-31.22h-.478a2.68,2.68,0,0,1-2.677-2.68h0a2.678,2.678,0,0,1,2.677-2.677h41.781a27.863,27.863,0,0,0,27.83-27.833V650.8a4.209,4.209,0,0,0-4.205-4.2H246.31a32.409,32.409,0,0,0-24.738,11.469c-.449.528-.888,1.066-1.3,1.622-.17.227-.332.462-.5.695-.407.577-.8,1.162-1.17,1.763-.12.2-.232.4-.347.6-.376.645-.731,1.3-1.06,1.964-.055.11-.115.217-.167.327-.374.776-.708,1.57-1.019,2.372-.039.1-.084.206-.123.311-.3.815-.572,1.646-.81,2.481-.031.107-.063.214-.091.318q-.345,1.265-.588,2.555c-.021.11-.039.222-.06.334-.152.865-.274,1.737-.355,2.617-.01.1-.016.2-.023.306-.078.909-.125,1.826-.125,2.745,0,2.2.112,4.383.285,6.546a81.948,81.948,0,0,0,81.568,75.307h9.737a67.856,67.856,0,0,0,67.78-67.777V670.82A21.863,21.863,0,0,1,356.641,678.423Z"
                                transform="translate(-213.836 -588.661)"
                            />
                            <path
                                className="a"
                                d="M266.685,642.439a18.026,18.026,0,0,0-36.053,0V676.99h36.053Z"
                                transform="translate(-186.762 -624.414)"
                            />
                            <path
                                className="a"
                                d="M278.731,634.407a16.583,16.583,0,0,0-16.562,16.562v25.179a16.564,16.564,0,0,0,33.127,0V650.969A16.583,16.583,0,0,0,278.731,634.407Z"
                                transform="translate(-135.926 -608.306)"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};
export default Rock;
