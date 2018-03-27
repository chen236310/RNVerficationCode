//
//  MyCustomViewManager.m
//  sdjkingfu
//
//  Created by ze hua chen on 2017/12/13.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MyCustomViewManager.h"
#import "CaptchaView.h"
#if __has_include(<React/RCTViewManager.h>) //进行通信的头文件
#import <React/RCTBridge.h>
#else
#import "RCTBridge.h"
#endif
#if __has_include(<React/RCTViewManager.h>) //进行通信的头文件
#import <React/RCTEventDispatcher.h>
#else
#import "RCTEventDispatcher.h"
#endif   //事件派发，不导入会引起Xcode警告

@interface MyCustomViewManager ()<ChangeCodeDelegate>

@property(nonatomic,strong)CaptchaView *captchaView;
@property(nonatomic,assign)float height;
@property(nonatomic,weak)UIWindow * window;

@end

@implementation MyCustomViewManager
RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)
- (UIView *)view
{
  _captchaView = [[CaptchaView alloc] initWithFrame:CGRectMake(0, 0, 40, 100)];
  
   _captchaView.delegate = self;
  // 创建队列
  dispatch_queue_t queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
  // 设置延时，单位秒
  double delay = 1;
  
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(delay * NSEC_PER_SEC)), queue, ^{
    // 1秒后需要执行的任务
      [_captchaView getChangeCodeWork];
  });
  
  return _captchaView;
}
//执行协议方法
- (void)getChangeCode:(NSString *)changeCode
{
  RCTLogInfo(@"%@ Pretending to create an event caffsafd",_captchaView.changeString);
  _captchaView.onChange(@{@"checkCode":changeCode});
}


/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

@end


