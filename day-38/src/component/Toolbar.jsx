import AlertButton from "./alertButton";

export default function Toolbar () {
    return (
        <div>
            <AlertButton message="playing"> Play movie</AlertButton>
            <AlertButton message="Uploading">Upload Image</AlertButton>
        </div>
    )
}