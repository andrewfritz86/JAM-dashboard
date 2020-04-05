// Set up private routing inside the dashboard namespace

exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*";
    actions.createPage(page);
  }
};
