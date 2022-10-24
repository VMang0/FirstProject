import main_page_image from "../../../images/PSDNukJan_(12) 1.png";
import s from './Main_Page.module.css';

function Main_Page() {
    return (
        <div className={s.main_page}>
            <div className={s.info}>
                <div className={s.slogan}><p>Get Your Best Cosmetic Products Here</p></div>
                <div className={s.details_info}><p>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                    Lorem Ipsum has been the industry's standard dummy</p></div>
                <div className={s.Search}>
                    <form action="src/App/Main_Content/Main_Page/Main_Page" method="get">
                        <input name="s" placeholder="Search..."/>
                        <button>sss</button>
                    </form>
                </div>
                <div className={s.Shop_Now}>
                    <button type={"submit"}>Shop Now</button>
                </div>
            </div>
            <div className={s.main_page_image}><img src={main_page_image}/></div>
        </div>
    );
}

export default Main_Page;