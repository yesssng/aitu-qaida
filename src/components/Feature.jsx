import FeatureStyle from "./Features.module.css";

const Feature = (props) => {
    return (
        <div className={FeatureStyle.card}>
            <div className={FeatureStyle.title}>
                {props.icon}
                <h4>{props.title}</h4>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}

export default Feature;