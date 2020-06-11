import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { ErrorPage } from '../../components/error/error.page.component';
import { Header } from '../../components/common/header.component';
import { Footer } from '../../components/common/footer.component';
import { Top } from '../../components/portal/top.component';
import { get } from '../../utils/axios.utils';

class TopContainer extends Component {
    render() {
        const publisher = get('/api/top/index');
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <ErrorPage>
                    <Header />
                    <Top {...this.props} publisher={publisher} />
                    <Footer />
                </ErrorPage >
            </Suspense>
        );
    }
}

export default connect()(TopContainer);