export function HeadingScore({count}) {
    let maxCount = -1;
    return (
        <div className="heading">
            <h1>Memory Games</h1>
            <div>
                <div>Score : {count}</div>
                <div>Best Score : {Math.max(count, maxCount)}</div>
            </div>
            <p>Get points by clicking on an image but don't click on any more than once!</p>
        </div>
    )
}