//
//  MyCustomViewManager.h
//  sdjkingfu
//
//  Created by ze hua chen on 2017/12/13.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#if __has_include(<React/RCTViewManager.h>)
#import <React/RCTViewManager.h>
#else
#import "RCTViewManager.h"
#endif
#import <React/RCTLog.h>
@interface MyCustomViewManager : RCTViewManager

@end
