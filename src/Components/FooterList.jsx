import PropTypes from "prop-types"

export default function FooterList({footer}){
    return(
        <div
            className="w-[50%] flex flex-col gap-3 my-2">
            <h2
            className="text-[20px] font-bold text-gray-800">
                {footer.title}
            </h2>
            <ul>
                {
                    footer.links.map((link)=><li className="my-2"><p className="text-black font-semibold cursor-pointer  inline hover:text-gray-400">{link}</p></li>)
                }
            </ul>
        </div>
    )
}

FooterList.propType = {
    footer : PropTypes.shape({
        title : PropTypes.string.isRequired,
        links : PropTypes.array.isRequired,
    })
}