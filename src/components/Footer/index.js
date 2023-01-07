import { Grid } from "@mui/material";
import React from "react";
import useStyles from "./indexStyles";
import brandImg from "../../assets/images/brand.jpg";
import "./index.css";

function Index() {
  const classes = useStyles();
  return (
    <Grid container lg={12}   className={classes.root}>
      <Grid item lg={4}  className={classes.GridLogo}>
        <div className={classes.divBrand}>
          <img src={brandImg} alt="brand" className={classes.brandImg} />
        </div>
        <div className={classes.divSpan}>
          <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.{" "}
          </span>
        </div>
        <div className={classes.divSupport}>
          <p>شماره تماس : 09189173524</p>
          <p>ایمیل پشتیبانی :farshadshabani69@gmail.com</p>
          <p>شبکه های اجتماعی :-------</p>
        </div>
      </Grid>
      <Grid item lg={3}  className={classes.GridOrder}>
        <div className={classes.divTitle}>
          <h3>نحوه سفارش</h3>
        </div>
        <div className={classes.divOrder}>
          <ul>
            <li>
              <a href="w">چطور سفارش بدم ؟</a>
            </li>
            <li>
              <a href="w">شرایط ارسال چطوره ؟</a>
            </li>
            <li>
              <a href="w">پرداخت هزینه </a>
            </li>
            <li>
              <a href="w">چرا به شما اعتماد کنم ؟</a>
            </li>
            <li>
              <a href="w">ضمانت چه شرایطی داره ؟</a>
            </li>
            <li>
              <a href="w"> آیا امکان عودت وجود داره ؟</a>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item lg={2} >
        <div className={classes.divTitle}>
          <h3> درباره برند</h3>
        </div>
        <div className={classes.divOrder}>
          <ul>
            <li>
              <a href="w"> درباره ما</a>
            </li>
            <li>
              <a href="w">تماس با ما</a>
            </li>
            <li>
              <a href="w"> روش های ارسال کالا </a>
            </li>
            <li>
              <a href="w"> برند در شبکه های اجتماعی</a>
            </li>
            <li>
              <a href="w"> تبلیغات</a>
            </li>
            <li>
              <a href="w"> شرایط عودت کالا</a>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item lg={2} >
        <div className={classes.divTitle}>
          <h3>اعتماد </h3>
        </div>
        <div className={classes.divOrder}>
          <ul>
            <li>
              <a href="w"> نماد الکترونیک</a>
            </li>
            <li>
              <a href="w"> ضمانت بازگشت وجه</a>
            </li>
            <li>
              <a href="w"> باشگاه مشتریان </a>
            </li>
            <li>
              <a href="w"> آدرس فروشگاه فیزیکی</a>
            </li>
            <li>
              <a href="w"> مورد آزمایشی</a>
            </li>
            <li>
              <a href="w">مورد آزمایشی دو</a>
            </li>
          </ul>
        </div>{" "}
      </Grid>
    </Grid>
  );
}

export default Index;
