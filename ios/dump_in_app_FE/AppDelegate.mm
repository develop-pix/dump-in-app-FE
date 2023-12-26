#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

// for naver login
#import <NaverThirdPartyLogin/NaverThirdPartyLoginConnection.h>

- (BOOL)application:(UIApplication *)application
     openURL:(NSURL *)url
     options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options 
  {
     // for naver login
    if ([url.scheme isEqualToString:@"your_apps_urlscheme"]) {
      return [[NaverThirdPartyLoginConnection getSharedInstance] application:application openURL:url options:options];
    }
     return YES;
  }

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"dump_in_app_FE";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
