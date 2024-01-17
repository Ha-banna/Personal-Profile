import './Button.css'

export default function Button(props: {buttontxt: string}) {
    return (<>
        <button className='button-design'>{props.buttontxt}</button>
    </>);
}