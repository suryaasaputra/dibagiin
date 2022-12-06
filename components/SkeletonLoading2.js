export default function SkeletonLoading2() {
    return(
        <div className="beranda mt-5">
            <div className="container-fluid pt-2">
                <div className="row m-2">
                    <div className="col-md-6 card-skeleton">
                        <div className="header-skeleton">
                            <div className="user-skeleton"><i className="fa fa-user"></i></div>
                            <div className="names-skeleton ms-3">
                                <div className="name-skeleton"></div>
                                <div className="name-skeleton"></div>
                            </div>
                        </div>

                        <div className="content-skeleton-img mt-3">
                            <div className="content-line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 card-skeleton">
                        <div className="header-skeleton">
                            <div className="names-skeleton ms-3">
                                <div className="name-skeleton"></div>
                                <div className="name-skeleton"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-md-6 card-skeleton">
                        <div className="header-skeleton">
                            <div className="user-skeleton"><i className="fa fa-user"></i></div>
                            <div className="names-skeleton ms-3">
                                <div className="name-skeleton"></div>
                                <div className="name-skeleton"></div>
                            </div>
                        </div>

                        <div className="content-skeleton-img mt-3">
                            <div className="content-line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 card-skeleton">
                        <div className="header-skeleton">
                            <div className="names-skeleton ms-3">
                                <div className="name-skeleton"></div>
                                <div className="name-skeleton"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}