import "./App.scss";

function App() {
    return (
        <main>
            <div className="container">
                <div className="join">
                    <h1>Join our community</h1>
                    <h2>30-day, hassle-free money back guarantee</h2>
                    <p>
                        Gain access to our full library of tutorials along with
                        expert code reviews. Perfect for any developers who are
                        serious about honing their skills.
                    </p>
                </div>
                <div className="subscription">
                    <h2>Monthly Subscription</h2>
                    <p className="price">
                        $29 <span>per month</span>
                    </p>
                    <p className="access">Full access for less than $1 a day</p>
                    <button>Sign Up</button>
                </div>
                <div className="why-us">
                    <h2>Why Us</h2>
                    <ul>
                        <li>Tutorials by industry experts</li>
                        <li>Peer & expert code review</li>
                        <li>Coding exercises</li>
                        <li>Access to our GitHub repos</li>
                        <li>Community forum</li>
                        <li>Flashcard decksNew videos every week</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default App;
