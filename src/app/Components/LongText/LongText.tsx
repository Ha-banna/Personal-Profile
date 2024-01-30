import './LongText.css';

export default function LongText(props: {children:any}){
    return (
        <div className='long-txt-cont'>
            <p className='long-txt'>{props.children}</p>
        </div>
    );
}