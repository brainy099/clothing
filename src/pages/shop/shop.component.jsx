import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collecitons-overview/collections-overview.components";
import CollectionPage from "../category/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
