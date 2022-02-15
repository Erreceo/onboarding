const View = (props) => {
    const {id} = props;
    return (<button
        type="button"
        className="bg-blue-600 px-8 py-2 rounded-md text-white hover:bg-blue-400"
        id={id}
    >
        {props.children}
    </button>)
}

export default View