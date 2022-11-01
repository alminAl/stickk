import { useParams } from "react-router-dom";
import Bmi from "../Components/Commit/Bmi";
import Smoke from "../Components/Commit/Smoke";

const CommitTypePage = () => {
    let { commit_type } = useParams();

    return (
        <div className="mt-32">
            <div className="w-full">
                {commit_type === 'weight_loss' && <Bmi />}
                {commit_type === 'smoke' && <Smoke />}
            </div>

        </div>
    )
}

export default CommitTypePage