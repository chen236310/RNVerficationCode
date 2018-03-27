package com.rnverficationcode;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * 验证码组件基础类管理器
 */
public class CheckCodeManager extends SimpleViewManager<CheckView> {
    public static final String REACT_CLASS = "MyCustomView";
    /**
     * 设置js引用名
     * @return String
     */
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    /**
     * 创建UI组件实例
     * @param reactContext
     * @return CheckView
     */
    @Override
    protected CheckView createViewInstance(ThemedReactContext reactContext) {
        return new CheckView(reactContext,null);
    }

}