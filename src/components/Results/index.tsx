import React, { PropTypes } from 'react'

function XMark({ width, height, fill, onClick }) {
    return (
        <div className="xmark-container" onClick={onClick}>
            <svg className='xmark' viewBox="67 8 8 8" width={width} height={height} version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <polygon stroke="none" fill={fill} fillRule="evenodd" points="74.0856176 9.4287633 71.5143809 12 74.0856176 14.5712367 73.5712367 15.0856176 71 12.5143809 68.4287633 15.0856176 67.9143824 14.5712367 70.4856191 12 67.9143824 9.4287633 68.4287633 8.91438245 71 11.4856191 73.5712367 8.91438245 74.0856176 9.4287633 74.0856176 9.4287633 74.0856176 9.4287633" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="818" height="518" viewBox="0 0 818 518"><defs><style>.a{fill:#fff;}.b{fill:#4c9bde;}.c{fill:#666;font-size:44px;font-family:HelveticaNeue-Light, Helvetica Neue;font-weight:300;}.d{filter:url(#a);}</style><filter id="a" x="0" y="0" width="818" height="518" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-391 -341)"><g transform="translate(140 57)"><g class="d" transform="matrix(1, 0, 0, 1, 251, 284)"><rect class="a" width="800" height="500" rx="17" transform="translate(9 6)"/></g><g transform="translate(146 27)"><g transform="translate(290)"><circle class="b" cx="67" cy="67" r="67" transform="translate(317 490)"/><g transform="translate(-92.418 -86.204)"><path class="a" d="M466.661,648.12H476.9V636.881a8.269,8.269,0,0,1,2.6-6.015l3.924-27.925a5.816,5.816,0,1,0-11.518-1.619l-5.43,37.307a1.026,1.026,0,0,1-2.03,0l-5.453-37.412a5.816,5.816,0,1,0-11.519,1.614c1.505,11.23,2.644,19.241,3.476,25.091,2.108,14.817,2.465,17.34,2.526,27.825A15.228,15.228,0,0,1,466.661,648.12Z"/><path class="a" d="M499.752,660.633a8.3,8.3,0,0,1-6.92-3.726,11.478,11.478,0,0,1-10.738,7.46H477.98a13.168,13.168,0,0,1,6.126,11.118v3.592a1.025,1.025,0,1,1-2.051,0v-3.592a11.131,11.131,0,0,0-11.119-11.118,1.025,1.025,0,0,1-1.025-1.026h0a1.025,1.025,0,0,1,1.025-1.025h11.158a9.413,9.413,0,0,0,9.4-9.2c0-.071.011-.141.011-.212a2.725,2.725,0,0,0-.043-.426c-.005-.032,0-.067-.01-.1a2.739,2.739,0,0,0-2.684-2.212h-22.1a13.185,13.185,0,0,0-13.171,13.17h0a26.935,26.935,0,0,0,8.308,19.951,26.373,26.373,0,0,0,19.7,7.017C495.236,689.42,506,677.5,506,663.176v-5.4A8.275,8.275,0,0,1,499.752,660.633Z"/><path class="a" d="M499.752,637.2a6.256,6.256,0,0,0-6.249,6.249v8.8a4.919,4.919,0,0,1,.05.658c0,.052,0,.1,0,.157A6.247,6.247,0,0,0,506,652.334V643.45A6.256,6.256,0,0,0,499.752,637.2Z"/><path class="a" d="M483.182,630.975c-.091.031-.181.063-.27.1s-.178.073-.266.113-.183.085-.273.131-.158.082-.236.125c-.1.055-.192.114-.286.174-.066.043-.133.084-.2.129-.1.07-.2.145-.293.22-.055.043-.112.085-.167.131a6.237,6.237,0,0,0-2.238,4.785V648.12h9.811a4.76,4.76,0,0,1,2.687.827V636.881a6.258,6.258,0,0,0-5.611-6.216q-.315-.031-.638-.032c-.2,0-.4.011-.6.03-.079.007-.157.021-.236.032-.115.015-.23.03-.342.052-.094.018-.187.041-.279.063s-.192.046-.286.074S483.275,630.942,483.182,630.975Z"/></g></g><g transform="translate(130)"><circle class="b" cx="67" cy="67" r="67" transform="translate(317 490)"/><path class="a" d="M383.31,615.954a4.637,4.637,0,0,0-4.632,4.632v22.147a1.025,1.025,0,0,1-2.051,0V609.7a5.436,5.436,0,0,0-5.43-5.43,5.367,5.367,0,0,0-3.919,1.612,5.49,5.49,0,0,0-1.511,3.838v33.012a1.025,1.025,0,0,1-2.051,0v-32.6a5.867,5.867,0,0,0-5.861-5.86,6,6,0,0,0-5.86,6.229v32.233a1.025,1.025,0,0,1-2.051,0v-26.4a5.436,5.436,0,0,0-5.43-5.43,5.566,5.566,0,0,0-5.431,5.776v40.06h12.059a16.539,16.539,0,0,1,12.525,5.736,1.025,1.025,0,1,1-1.552,1.34,14.492,14.492,0,0,0-10.973-5.025H338.058a1.028,1.028,0,0,1-.137-.014c-.018,0-.035,0-.052-.005a1.019,1.019,0,0,1-.245-.08l-.053-.029a1.031,1.031,0,0,1-.189-.132c-.008-.007-.018-.011-.026-.018l-5.085-4.778a9.657,9.657,0,0,0-13.474.187,2.514,2.514,0,0,0-.077,3.5l19.256,20.892c7.725,8.562,15.573,12.052,27.094,12.052a23.019,23.019,0,0,0,22.873-23.11v-46.44A4.66,4.66,0,0,0,383.31,615.954Z" transform="translate(30.951 -90.271)"/></g><g transform="translate(-30)"><circle class="b" cx="67" cy="67" r="67" transform="translate(317 490)"/><g transform="translate(139.164 -100.414)"><path class="a" d="M260.118,644.921V631.23a6.816,6.816,0,0,0-13.632,0v13.313h12.022A3.63,3.63,0,0,1,260.118,644.921Z"/><path class="a" d="M228.581,644.543v-13.83a5.7,5.7,0,1,0-11.394,0v17.042a14.416,14.416,0,0,1,9.082-3.212Z"/><path class="a" d="M268.51,658.78a8.389,8.389,0,0,1-7.258-4.2,12.723,12.723,0,0,1-11.789,7.977h-8.525a14.005,14.005,0,0,1,6.716,11.953v3.839a1.026,1.026,0,0,1-2.051,0v-3.839a11.966,11.966,0,0,0-11.953-11.953h-.183a1.026,1.026,0,0,1-1.025-1.026h0a1.025,1.025,0,0,1,1.025-1.025h16a10.668,10.668,0,0,0,10.655-10.656V648.2a1.611,1.611,0,0,0-1.61-1.609H226.269a12.408,12.408,0,0,0-9.471,4.391c-.172.2-.34.408-.5.621-.065.087-.127.177-.19.266-.156.221-.307.445-.448.675-.046.075-.089.152-.133.228-.144.247-.28.5-.406.752-.021.042-.044.083-.064.125-.143.3-.271.6-.39.908-.015.04-.032.079-.047.119-.116.312-.219.63-.31.95-.012.041-.024.082-.035.122q-.132.484-.225.978c-.008.042-.015.085-.023.128-.058.331-.105.665-.136,1,0,.039-.006.078-.009.117-.03.348-.048.7-.048,1.051,0,.844.043,1.678.109,2.506a31.374,31.374,0,0,0,31.229,28.832H248.9a25.979,25.979,0,0,0,25.95-25.949v-8.547A8.37,8.37,0,0,1,268.51,658.78Z"/><path class="a" d="M244.435,631.315a6.9,6.9,0,0,0-13.8,0v13.228h13.8Z"/><path class="a" d="M268.51,634.407a6.349,6.349,0,0,0-6.341,6.341v9.64a6.341,6.341,0,0,0,12.683,0v-9.64A6.349,6.349,0,0,0,268.51,634.407Z"/></g></g><text class="c" transform="translate(514 446)"><tspan x="-79.882" y="0">Choose:</tspan></text></g></g></g></svg>
        </div>
    )
}
XMark.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
    onClick: PropTypes.func,
}
XMark.defaultProps = {
    width: 8,
    height: 8,
    fill: '#979797',
    onClick: null,
}
export default XMark