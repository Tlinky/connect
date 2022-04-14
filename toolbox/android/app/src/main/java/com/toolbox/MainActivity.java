package com.toolbox;

import com.facebook.react.ReactActivity;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "toolbox";
  }
  /**
   * 启动页配置
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);  // 显示
    super.onCreate(savedInstanceState);
  }
}




