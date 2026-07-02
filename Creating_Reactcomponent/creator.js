const root = document.querySelector("#root");
// React.createElement takes 3 arguments, the first is the type of element, the second is the props and the third is the children
const cover = React.createElement("h1", { className: "heading" }, "Best Tekken players");
//react this is how we create a react element, the first argument is the type of element, the second is the props and the third is the children
const rec=React.createElement("section", { className: "Ranklist" }, 
    React.createElement("ul", { className: "player" },
    React.createElement("li", { className: "player2" }, "Arsalan Ash", React.createElement("br", null), " main:Nina"),
    React.createElement("li", { className: "player3" }, "Knee", React.createElement("br", null), " main:Bryan"),
    React.createElement("li", { className: "player4" }, "Ikari", React.createElement("br", null), " main:Kazuya"),
    React.createElement("li", { className: "player5" }, "Yagami", React.createElement("br", null), " main:Reina")
    ));

// ReactDOM.render(cover, root);
// ReactDOM.render(rec, root); can cause one to overwrite the other, so we can use React.Fragment to render both together
const app=React.createElement(React.Fragment, null, cover, rec);
ReactDOM.render(app, root);
