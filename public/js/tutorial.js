var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Commnets</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
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
    <CommentBox />,
    document.getElementById('content')
);
