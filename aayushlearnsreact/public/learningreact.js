function myButton() {
    return (
        <button>Click me</button>
    )
}

export default function LearningReact() {
    return (
        <div>
            <h1>Learning React</h1>
            <myButton />
        </div>
    )
}

const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container); // Use createRoot for React 18+
    root.render(<App />);