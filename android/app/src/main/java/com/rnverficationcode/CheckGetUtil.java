package com.rnverficationcode;

/**
 * 功能：验证码相关工具类
 * 博客：http://blog.csdn.net/u010538765/article/
 * 时间:2013.8.19
 * @author Jacky
 * */
public class CheckGetUtil
{
    //获得画干扰直线的位置
    public static int[] getLine(int height, int width)
    {
        int [] tempCheckNum = {0, 0 ,0, 0, 0};
        for(int i = 0; i < 4; i+=2)
        {
            tempCheckNum[i] = (int) (Math.random() * width);
            tempCheckNum[i + 1] = (int) (Math.random() * height);
        }
        return tempCheckNum;
    }

    //获得干扰点的位置
    public static int[] getPoint(int height, int width)
    {
        int [] tempCheckNum = {0, 0, 0, 0, 0};
        tempCheckNum[0] = (int) (Math.random() * width);
        tempCheckNum[1] = (int) (Math.random() * height);
        return tempCheckNum;
    }
}