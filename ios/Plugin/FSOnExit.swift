import Foundation

@objc public class FSOnExit: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
