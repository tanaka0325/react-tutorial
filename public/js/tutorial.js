var data = [
    {
        author: "Pete Hunt",
        text: "This is one comment"
    },
    {
        author: "Jordan Walke",
        text: "This is *another* comment"
    }
];

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Commnets</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

var Comment = React.createClass({
    rawMarkup: function(htmlStr) {
        var rawMarkup = marked(htmlStr.toString(), {sanitize: true});
        return {__html: rawMarkup};
    },

    render: function() {
        return (
            <div className="Comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup(this.props.children)} />
            </div>
        )
    }
})

ReactDOM.render(
    <CommentBox data={data} />,
    document.getElementById('content')
);
