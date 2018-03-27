//
//  CaptchaView.h
//  sdjkingfu
//
//  Created by ze hua chen on 2017/12/13.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTLog.h>
#import <React/RCTComponent.h>
@protocol ChangeCodeDelegate <NSObject>//协议

- (void)getChangeCode:(NSString *)changeCode;//协议方法

@end
@interface CaptchaView : UIView
@property (nonatomic, retain) NSArray *changeArray; //字符素材数组
@property (nonatomic, retain) NSMutableString *changeString;  //验证码的

@property (nonatomic, copy) RCTBubblingEventBlock onChange;
@property (nonatomic, assign) id<ChangeCodeDelegate>delegate;//代理属性

- (void)getChangeCodeWork;//协议方法

@end
