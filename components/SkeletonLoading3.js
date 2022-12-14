export default function SkeletonLoading3() {
    return (
        <div className="beranda mt-5">
            <div className="container-fluid">
                <div className="row m-2">
                    <div className="col-md-6 card-skeleton">
                        <div className="header-skeleton-profil">
                            <div className="full-name"></div>
                            <div className="user-skeleton"><i className="fa fa-user"></i></div>
                        </div>

                        <div className="content-skeleton-profil mt-3">
                            <div className="content-line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 card-skeleton">
                        <div className="header-skeleton">
                            <div className="names-skeleton ms-3">
                                <div className="name-skeleton"></div>
                                <div className="name-skeleton"></div>
                                <div className="name-skeleton"></div>
                                <div className="name-skeleton"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="card-skeleton">
                        <div className="header-skeleton">
                            <div className="user-skeleton"><i className="fa fa-user"></i></div>
                            <div className="names-skeleton ms-3">
                                <div className="name-skeleton"></div>
                                <div className="name-skeleton"></div>
                            </div>
                        </div>

                        <div className="content-skeleton mt-3">
                            <div className="content-line"></div>
                            <div className="content-line"></div>
                            <div className="content-line"></div>
                        </div>

                        <div className="btns-skeleton mt-2">
                            <div className="btn-skeleton"></div>
                            <div className="btn-skeleton"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}